/**
 * リクエストの結果
 * （Responseが予約語だったためResult）
 */
class Result<MainResponse = {}, MetaResponse = {}> {
  constructor(
    public readonly statusCode: number,
    public readonly main: MainResponse,
    public readonly meta: MetaResponse,
  ) {}
}

export default Result
