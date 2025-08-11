import IOperationUseCase
    from "domains/src/useCases/interfaces/IOperationUseCase";
import IAuthUseCase
    from "domains/src/useCases/interfaces/IAuthUseCase";

export default interface IUseCase{
    operation: IOperationUseCase,
    auth: IAuthUseCase
}