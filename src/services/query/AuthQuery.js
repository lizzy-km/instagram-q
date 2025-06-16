// Need to use the React-specific entry point to import createApi
import { createApi, fakeBaseQuery, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db, firestore } from "../../config/firebase/FirebaseConfig";

// Define a service using a base URL and expected endpoints
export const authQueryApi = createApi({
  reducerPath: "authQueryApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUserData: builder.query({
        async queryFn() {
          try {
            const postsCollection = collection(firestore, 'users');
            const querySnapshot = await getDocs(postsCollection);
            const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            return { data: users };
          } catch (error) {
            return { error };
          }
        },
        providesTags: ['Posts'],
      }),
      getUserDataById: builder.query({
        async queryFn() {
          try {
            const postsCollection = collection(firestore, 'users');
            const querySnapshot = await getDocs(postsCollection);
            const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            return { data: users };
          } catch (error) {
            return { error };
          }
        },
        providesTags: ['Users'],
      }),

      getUsersStream: builder.query({
        queryFn: () => ({ data: [] }), // Initial empty data
        async onCacheEntryAdded(
          arg,
          { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
        ) {
          const postsCollection = collection(firestore, 'users');
          const unsubscribe = onSnapshot(
            postsCollection,
            (snapshot) => {
              updateCachedData((draft) => {
                // Immer is used under the hood by RTK Query
                const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                return posts;
              });
            },
            (error) => {
              // Handle errors
            }
          );
      
          await cacheEntryRemoved;
          unsubscribe();
        },
      }),
  }),

  
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserDataQuery, useGetUserDataByIdQuery,useGetUsersStreamQuery } = authQueryApi;
