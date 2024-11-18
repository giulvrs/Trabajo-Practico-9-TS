import { FC } from "react";
import { ItemProducts } from "../../../types/ItemProduct";
import { Card } from "react-bootstrap";

interface IPropsListProducts{
    arrItems: ItemProducts[];
}


export const ListProduct: FC<IPropsListProducts> = ({arrItems}) =>  {

    return(
        <div 
            className="p-1 m-3 border rounded d-grid gap-2" 
            style={{
                gridTemplateColumns:"repeat(2,1fr)",
                justifyItems: "center",
                alignItems:"center"
            }}>

            {arrItems.map((elemento, i)=>(
                <Card key={i} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={elemento.imagen} />
                <Card.Body>
                  <Card.Title>{elemento.nombre}</Card.Title>
                  <Card.Text>${elemento.precio}</Card.Text>
                </Card.Body>
              </Card>
            ))}
        </div>
    );
}
