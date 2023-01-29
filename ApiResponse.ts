export default class ApiResponse {
	private status: string;
	private errorCode: number;
	private message: string | null;

	public constructor(status: string, errorCode: number, message: string | null) {
		this.status = status;
		this.errorCode = errorCode;
		this.message = message;
	}

	public getStatus(): string {
		return this.status;
	}

	public getErrorCode(): number {
		return this.errorCode;
	}

	public getMessage(): string | null {
		return this.message;
	}
}
