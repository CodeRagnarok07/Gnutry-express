import RoleDb from '../models/userRole.model'


export default async ()=>{
    console.log("creando roles asdsa");

    try {
        const count = await RoleDb.estimatedDocumentCount()
        console.log("numero de roles", count);

        if(count > 0) return
        
        const values = await Promise.all([
            new RoleDb({name:"user"}).save(),
            new RoleDb({name:"admin"}).save(),
        ])

        console.log("user role creted");
        console.log(values);

    } catch (error) {
        console.log(error);
    }

}