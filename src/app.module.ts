import { Module } from '@nestjs/common';
import { AuthModuele } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';


@Module({
  imports: [AuthModuele, UserModule, BookmarkModule],
})
export class AppModule {}
