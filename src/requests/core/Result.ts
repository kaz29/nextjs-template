class Result<MainResponse = {}> {
  constructor(
    public readonly statusCode: number,
    public readonly response: MainResponse,
  ) {}
}

export default Result
