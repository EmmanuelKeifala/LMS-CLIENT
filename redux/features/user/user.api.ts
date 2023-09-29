import {apiSlice} from '../api/apiSlice';

export const userApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    updateAvatar: builder.mutation({
      query: avatar => ({
        url: '/update-profile-picture',
        method: 'PUT',
        body: {avatar},
        credentials: 'include' as const,
      }),
    }),
    editProfile: builder.mutation({
      query: ({name, email}) => ({
        url: '/update-user',
        method: 'PUT',
        body: {name, email},
        credentials: 'include' as const,
      }),
    }),
    updatePassword: builder.mutation({
      query: ({oldPassword, newPassword}) => ({
        url: '/update-password',
        method: 'PUT',
        body: {oldPassword, newPassword},
        credentials: 'include' as const,
      }),
    }),
  }),
});

export const {
  useUpdateAvatarMutation,
  useEditProfileMutation,
  useUpdatePasswordMutation,
} = userApi;
