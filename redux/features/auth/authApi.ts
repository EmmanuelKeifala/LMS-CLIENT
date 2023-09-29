import {apiSlice} from '../api/apiSlice';
import {userLoggedIn, userRegistration} from './authSlice';

type RegistrationResponse = {
  message: string;
  activationToken: string;
};

type RegistrationData = {};

export const authApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // endpoint
    register: builder.mutation<RegistrationResponse, RegistrationData>({
      query: data => ({
        url: 'register',
        method: 'POST',
        body: data,
        credentials: 'include' as const,
      }),
      async onQueryStarted(arg, {queryFulfilled, dispatch}) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userRegistration({
              token: result.data.activationToken,
            }),
          );
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
    activation: builder.mutation({
      query: ({activation_token, activation_code}) => ({
        url: '/activate-user',
        method: 'POST',
        body: {activation_token, activation_code},
      }),
    }),
    login: builder.mutation({
      query: ({email, password}) => ({
        url: '/login-user',
        method: 'POST',
        body: {email, password},
        credentials: 'include' as const,
      }),
      async onQueryStarted(arg, {queryFulfilled, dispatch}) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              accessToken: result.data.activationToken,
              user: result.data.user,
            }),
          );
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
    socialAuth: builder.mutation({
      query: ({email, name, avatar}) => ({
        url: '/social-login',
        method: 'POST',
        body: {email, name, avatar},
        credentials: 'include' as const,
      }),
      async onQueryStarted(arg, {queryFulfilled, dispatch}) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              accessToken: result.data.activationToken,
              user: result.data.user,
            }),
          );
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
  }),
});
export const {
  useRegisterMutation,
  useActivationMutation,
  useLoginMutation,
  useSocialAuthMutation,
} = authApi;
