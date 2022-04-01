import { Injectable } from '@nestjs/common';

import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';

@Injectable()
export class UsuarioService {
  create(createUsuarioInput: CreateUsuarioInput) {
    return 'This action adds a new usuario';
  }

  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: string) {
    return `This action returns a #${id} usuario`;
  }

  update(id: string, updateUsuarioInput: UpdateUsuarioInput) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: string) {
    return `This action removes a #${id} usuario`;
  }
}
