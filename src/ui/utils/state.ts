export type InitialState = {
  status: 'init';
};

export type LoadingState = {
  status: 'loading';
};

export type SuccessState<T> = {
  status: 'success';
  data: T;
};

export type ErrorState = { status: 'error'; error: string };

export type UIState<T> = InitialState | LoadingState | SuccessState<T> | ErrorState;
