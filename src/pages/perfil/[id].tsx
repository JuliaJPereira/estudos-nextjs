import { useParams } from "next/navigation"

export default function PerfilId(){
    const params = useParams();
    return <h1>PerfilId {params?.id}</h1>
}