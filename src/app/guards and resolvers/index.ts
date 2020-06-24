import { LoginContainerGuard } from './login-container.guard';
import { AuthGuard } from './auth.guard';


export const guards: any[] =
    [
        AuthGuard,
        LoginContainerGuard
    ]
