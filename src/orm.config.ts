import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config:TypeOrmModuleOptions={
    name:'ser1',
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'helkhatr',
    // password:'',
    database:'web',
    synchronize:true,
    entities:[__dirname+'/../**/*.entity.{js,ts}']

}