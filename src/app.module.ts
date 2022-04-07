import { Module } from '@nestjs/common';
import { AuthModuele } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [AuthModuele, UserModule, BookmarkModule, PrismaModule],
})
export class AppModule {}
