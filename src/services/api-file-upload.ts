import { fileApi } from '@services/api';
import { retry } from '@reduxjs/toolkit/query/react';
import { IFileUpload } from './api-file-upload.interface';

export const fileUploadApi = fileApi.injectEndpoints({
  
  endpoints: (builder) => ({

    uploadImage: builder.mutation<IFileUpload, FormData>({
      query(data) {
        return {
          url: 'upload',
          method: 'POST',
          body: data,
        };
      },
      extraOptions: {
        backoff: () => {
          retry.fail({ fake: 'error' })
        }
      }
    }),
    uploadSingleImage: builder.mutation<IFileUpload, FormData>({
      query(data) {
        return {
          url: 'single_upload',
          method: 'POST',
          body: data, 
        };
      },
      extraOptions: {
        backoff: () => {
          retry.fail({ fake: 'error' })
        }
      }
    }),
    uploadMultipleImage: builder.mutation<IFileUpload[], FormData>({
      query(data) {
        return {
          url: 'multi_upload',
          method: 'POST',
          body: data,
        };
      },
      extraOptions: {
        backoff: () => {
          retry.fail({ fake: 'error' })
        }
      }
    }),
  })
})

export const {
useUploadImageMutation,
useUploadSingleImageMutation,
useUploadMultipleImageMutation
} = fileUploadApi;