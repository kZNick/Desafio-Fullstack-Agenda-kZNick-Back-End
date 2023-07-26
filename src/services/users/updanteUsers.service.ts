import { Repository } from "typeorm";
import {
  TUserUpdatetREquest,
  TUsersResponse,
} from "../../interfaces/users.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schema/user.schemas";

const updateUserService = async (
  userData: TUserUpdatetREquest,
  userId: number
): Promise<TUsersResponse> => {
  
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: any | null = await userRepository.findOneBy({
    id: userId,
  });

  const newUserData: User[] = userRepository.create({
    ...oldUserData,
    ...userData,
  });
  await userRepository.save(newUserData);

  const returnUser: TUsersResponse = userSchemaResponse.parse(newUserData);

  return returnUser;
};

export default updateUserService;
