function handleClick(){
    console.log("Hello");
}

function handleMouseOver(){
    console.log("Bye");
}

function handleDblClick(){
    console.log("you double clicked");
}

export default function Button(){
    return(
        <div>
            <button onClick={handleClick} >Click me!</button>

            <p onMouseOver={handleMouseOver}> Lorem, ipsum dolor sit amet consectetur 
                adipisicing elit. Sapiente perspiciatis 
                ea laborum, modi dolorem eius, 
                quam inventore minus, repellat repellendus numquam!
                Eveniet esse, deleniti accusamus aliquam 
                accusantium molestias commodi obcaecati.This paragraph
                is for event demo</p>

            <button onDoubleClick={handleDblClick}>double click me!</button>
        </div>
    );
}