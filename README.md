# Namaste-React 

# Parcel
- Dev Build
- Local Server
- HMR(Hot Module Replacement) 
    - Parcel uses File Watching Algorithm-written in c++(it keeps track of all the files which are changing realtime $ it tells the server to reload)
    - Caching - faster builds
    - Image Optimization
    - Minification (during production)
    - Bundling
    - Compressing
    - Consistent Hashing
    - Code Splitting
    - Differential Bundling - to support older browsers
    - Error Handling
    - Tree Shaking Algorithm (removes unused code for us)


solved the push declined due to repository rule violation error,
the issue was the secret key was revealed in the repository section of package.json
but even after removing it manually, in the previous commit, the secret key was revealed, so had to soft reset git and add package.json after carefully removing the secret key from it. Tough day indeed(03/02/25)

another commit i am about to make(to be reassured, it actually worked)