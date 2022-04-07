import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AuthService {
  constructor(private pirsma: PrismaService) {}
  signup() {
    return { msg: 'I am signed up' }
  }

  signin() {
    return 'I am signed in'
  }
}