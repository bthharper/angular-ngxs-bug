export class RaiseError {
  public static readonly type = '[ERROR] Raise Error';

  constructor(public error: Error) {}
}
