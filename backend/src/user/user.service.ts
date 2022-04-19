import {Inject, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly UserRepository: Repository<User>
    ) {
    }


    create(data): Promise<User> {
        return this.UserRepository.save(data);
    }

    all(): Promise<User[]>{
        return this.UserRepository.find();
    }

    findOne(id:number): Promise<User>{
        return this.UserRepository.findOne({id});
    }

    delete(id:number){
        return this.UserRepository.delete({id});
    }

     async updaten(id:number,data): Promise<User> {
        await this.UserRepository.update(id,data);

        return this.UserRepository.findOne({id});
    }

}
