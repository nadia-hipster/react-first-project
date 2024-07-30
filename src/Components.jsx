import {Ghost, Rabbit} from "lucide-react";

function Button(props) {
    console.log(props);
    return (
        <button className={"btn btn-primary " + props.className}>
            {props.children}
        </button>);
}

const Badge2 = ({isNew}) => {
    if (!isNew) return null;
    return <div className="badge badge-primary">new</div>;
};

function ShoeCard(props) {
    console.log(props);

    if (!props.isVisible) {
        return <Ghost/>;
    }

    return (
        <div className="card bg-neutral text-neutral-content shadow-md">
            <figure>
                <img className="h-32 w-full object-cover" src={props.image} alt="Shoes"/>
            </figure>
            <div className="card-body">
                <div className="flex items-center gap-2">

                    <h2 className="card-title">
                        {props.id ? props.id + " - " : ""}
                        {props.title}
                    </h2>

                    {/* En créant un composant Badge */}
                    <Badge2 isNew={props.isNew}/>

                    {/* Syntaxe ternaire */}
                    {props.isNew ? <div className="badge badge-primary">new</div> : null}

                    {/* Affiche le zero si isNew === 0 */}
                    {props.isNew && <div className="badge badge-primary">new</div>}

                    {/* Marche même si isNew === 0 si on force isNew à boolean */}
                    {Boolean(props.isNew) && <div className="badge badge-primary">new</div>}
                </div>
            </div>
        </div>
    )
}

const SHOES = [
        {
            "id": 1,
            "image": "src/assets/shoes-1.png",
            "isVisible": true,
            "isNew": true,
            "title": "Requin"
        },
        {
            "id": 2,
            "image": "src/assets/shoes-2.png",
            "isVisible": true,
            "isNew": false,
            "title": "Basket"
        },
        {
            "id": 3,
            "image": "src/assets/shoes-2.png",
            "isVisible": false,
            "isNew": false,
            "title": "Basket"
        },
        {
            "id": 4,
            "image": "src/assets/shoes-3.png",
            "isVisible": true,
            "isNew": false,
            "title": "test"
        }
    ]
;

export default function Components() {
    return (
        <div className="flex flex-col items-start gap-4">
            {/* Changer le css avec style, pas recommandé car non maintenable */}
            <button style={{background: "red", padding: "44px"}}>Mon super bouton avec style !</button>

            {/* Changer le style avec une classe globale */}
            <button className={"mon-super-button"}>Mon super bouton avec Class Name !</button>

            {/* Utiliser le composant Button */}
            <Button className="btn-lg">Je suis super !</Button>
            <Button className="btn-lg">
                <Rabbit size={24}/>
                Rabbit Click
            </Button>
            <Button className="btn-lg">
                {
                    ["Melvin", "Nadia"]
                }
            </Button>

            {/* Utiliser le composant ShoeCard */}
            <ShoeCard image="src/assets/shoes-1.png" isVisible isNew title="Requin"></ShoeCard>
            <ShoeCard image="src/assets/shoes-2.png" isVisible title="Basket"></ShoeCard>
            <ShoeCard image="src/assets/shoes-2.png" title="Basket"></ShoeCard>
            <ShoeCard image="src/assets/shoes-3.png" isVisible title="test"></ShoeCard>

            {/* Afficher les shoes à partir d'une liste */}
            {SHOES.map(shoe => <ShoeCard key={shoe.id} id={shoe.id} image={shoe.image} isVisible={shoe.isVisible}
                                         isNew={shoe.isNew}
                                         title={shoe.title}/>
            )}

            {/* Afficher les shoes sans passer tous les paramètres */}
            {SHOES.map(shoe => <ShoeCard key={shoe.id} {...shoe}/>)}
        </div>);
}