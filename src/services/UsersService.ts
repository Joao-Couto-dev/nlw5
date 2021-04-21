import { getCustomRepository } from "typeorm";
import UsersRepository from "../repositories/UsersRepository";


class UsersService{
    async create(){
        const usersRepository = getCustomRepository(UsersRepository);

        const userAlreadyExists = usersRepository.findOne({})
    }
}

export default UsersService;