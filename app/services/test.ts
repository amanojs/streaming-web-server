export class TestService {
    public async test(): Promise<Response>{
        return{
            text: 'Test Service OK.'
        }
    }
}

interface Response {
    text: string;
}