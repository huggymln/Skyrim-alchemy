import { useEffect, useMemo, useState } from "react";
import { db } from "../FirebaseConfig";
import { collection, getDocs } from "@firebase/firestore";
import Detail from "./RecipeDetailModal";
import "../components/Recipe.css";
import { ImLab } from "react-icons/im";
//import { async } from "@firebase/util";

export default function Recipes(){

    const [load, setLoad] = useState(true);
    const [posts, setPosts] = useState([]);
    const [category, setCategory] = useState('');
    const [open, setOpen] = useState(false);
    const [selected, setselected] = useState();

    const resep = collection(db, "Recipes");
    const temp = [];
    const toggle = ()=>{
        setOpen(!open);
    }

    useEffect(()=>{
        const getDatas = async()=>{
            const datas = await getDocs(resep);
            setPosts(datas.docs.map((doc) =>({...doc.data(), id: doc.id})));
            setLoad(false);
        };
        getDatas();
        
    }, []);
    
    function filter(){
        posts.filter((e) =>{
            if(category === 'Potion'){
                return e.Type === 'Potion';
            }else if(category === 'Poison'){
                return e.Type === 'Poison';
            }else
                return e;
        })
    }
    if(load){
        return(
            <h1>Getting Documents from M'aiq...</h1>
        );
    }else{
        return(
            <div className="ParentDiv">
                {open && <Detail props={setOpen} test={posts[selected-1] }/>}
                <div className="TitleContainer">
                    <div className="Title">
                        <h1>List of Alchemy Recipes In Skyrim <ImLab /></h1>
                        <div>
                            <select 
                                className="dropdown" 
                                value={category}
                                onChange={(e)=>{
                                    setCategory(e.target.value);
                                    filter();
                                }}
                            >
                                <option>none</option>
                                <option>Potion</option>
                                <option>Poison</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="RecipeContainer">
                    {posts
                    .filter((e) =>{
                        if(category === 'Potion'){
                            return e.Type === 'Potion';
                        }else if(category === 'Poison'){
                            return e.Type === 'Poison';
                        }else
                            return e;
                    })
                    .map((item)=>{
                        //temp.push(item.Details);
                        if(item.length < 0){
                            return(
                                <h1>M'aiq ran away with the recipe, none left here.</h1>
                            );
                        }
                        return(
                            <div className="RecipeCard" key={item.Id}>
                                <h2 style={{borderBottomColor: item.Type === "Potion" ? 'darkgreen':'maroon'}}>{item.Name}</h2>
                                <label>{item.Class}</label>
                                <div className="RecipeCardFooter">
                                    <div>
                                        <p style={{color: item.Type === "Potion" ? 'darkgreen':'maroon'}}>{item.Type}</p>
                                    </div>
                                    <div className="detail">
                                        <p 
                                            style={{textAlign: 'right'}}
                                            onClick={()=>{
                                                setOpen(!open);
                                                setselected(item.Id);
                                            }}
                                        >
                                            Click for details
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
    
}