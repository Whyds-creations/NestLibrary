import React from 'react'

export default function UploadMain() {
  return (
      <div className="m-20 p-20">
          <div className="p-8 rounded-lg bg-nestbackground">
              <h2 className="text-center text-4xl font-bold">UPLOAD YOUR FILES TO THE BLOCKCHAIN</h2>
              <form>
                  <input placeholder="Description" className="w-full bg-nestbackground outline outline-2  outline-offset-2 rounded-sm m-4" />
                  <input type="file" aria-label="label" className="w-full bg-nestbackground outline outline-2  outline-offset-2 rounded-sm m-4 " />
                  <div className="flex gap-2 item-center">
                      <input type='checkbox' className="h-6" />
                       <h2>Make File Public</h2> 
                  </div>
                  <div className="flex item-center justify-center">
                      <button className='bg-black p-3 w-80 rounded-lg text-white text-2xl font-bold'>Upload</button>
                  </div>
              </form>
          </div> 
          <div className='mt-10 p-8 rounded-lg bg-nestbackground'>
              <h2 className="text-center text-xl font-bold mb-8">Public Files</h2>
              <table className="table-auto justify-center">
                  <thead>
                      <tr>
                          <th scope="col" style={ { width: '200px' } }>Name</th>
                          <th scope="col" style={ { width: '230px' } }> Description</th>
                          <th scope="col" style={ { width: '230px' } }> Type</th>
                          <th scope="col" style={ { width: '120px' } }>Uploader</th>
                          <th scope="col" style={ { width: '120px' } }>IPFS HASH</th>
                      </tr>
                  </thead>
              </table>

          </div>
          <div className='mt-10 p-8 rounded-lg bg-nestbackground'>
              <h2 className="text-center text-xl font-bold mb-8">Private Files</h2>
              <table className="table-auto justify-center">
                  <thead>
                      <tr>
                          <th scope="col" style={ { width: '200px' } }>Name</th>
                          <th scope="col" style={ { width: '230px' } }> Description</th>
                          <th scope="col" style={ { width: '230px' } }> Type</th>
                          <th scope="col" style={ { width: '120px' } }>Uploader</th>
                          <th scope="col" style={ { width: '120px' } }>IPFS HASH</th>
                      </tr>
                  </thead>
              </table>

          </div>
          <div className='mt-10 p-8 rounded-lg bg-nestbackground'>
              <h2 className="text-center text-xl font-bold mb-8">Shared Files</h2>
              <table className="table-auto justify-center">
                  <thead>
                      <tr>
                          <th scope="col" style={ { width: '200px' } }>Name</th>
                          <th scope="col" style={ { width: '230px' } }> Description</th>
                          <th scope="col" style={ { width: '230px' } }> Type</th>
                          <th scope="col" style={ { width: '120px' } }>Uploader</th>
                          <th scope="col" style={ { width: '120px' } }>IPFS HASH</th>
                      </tr>
                  </thead>
              </table>

          </div>
          
    </div>
  )
}
