// import { TaskDto } from '@todo/dto/task.dto';
// import { TodoEntity } from '@todo/entity/todo.entity';
// import { TodoDto } from '@todo/dto/todo.dto';
// import { TaskEntity } from '@todo/entity/task.entity';
import { Users } from '../users/user.entity';
import { userDto } from '../users/DTO/userDto';

// export const toTodoDto = (data: TodoEntity): TodoDto => {
//   const { id, name, description, tasks, owner } = data;

//   let todoDto: TodoDto = {
//     id,
//     name,
//     description,
//     owner: owner ? toUserDto(owner) : null,
//   };

//   if (tasks) {
//     todoDto = {
//       ...todoDto,
//       tasks: tasks.map((task: TaskEntity) => toTaskDto(task)),
//     };
//   }

//   return todoDto;
// };

// export const toTaskDto = (data: TaskEntity): TaskDto => {
//   const { id, name } = data;

//   let taskDto: TaskDto = {
//     id,
//     name,
//   };

//   return taskDto;
// };

export const toUserDto = (data: Users): userDto => {
  const { User_id, Name, Email , Phone, Verifymail, Deleted } = data;

  let UserDto: userDto = {
    User_id,
     Name,
     Email,
     Phone,
     Verifymail,
     Deleted
  };

  return UserDto;
};
