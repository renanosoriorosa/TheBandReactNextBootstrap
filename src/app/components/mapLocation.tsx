import Image from "next/image";
import mapJPG from '../imgs/map.jpg'

export default function MapLocation(){
    return(
        <Image alt="" layout="responsive" src={mapJPG} />
    );
}