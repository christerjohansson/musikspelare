/*
 Copyright (c) 2021 Christer Johansson of Sweden Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { useState, useEffect } from 'react';
import { useSpotify } from '../hooks/useSpotify';
import { useRecoilState } from 'recoil';
import { playlistIdState } from '../atoms/playlistAtom';

import { HomeIcon, SearchIcon, LibraryIcon } from '@heroicons/react/outline';
import { PlusCircleIcon, HeartIcon } from '@heroicons/react/solid';

const Sidebar = () => {
  const spotifyApi = useSpotify();
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((res) => {
        setPlaylists(res.body.items);
      });
    }
  }, [spotifyApi]);

  return (
    <div className='text-[#b3b3b3] text-sm lg:text-base p-5 h-screen sm:max-w-[12rem] lg:max-w-[15rem] border-r border-gray-800 overflow-y-scroll scrollbar-hide hidden md:inline'>
      <div className='space-y-5'>
        <button className='flex items-center space-x-3 hover:text-white'>
          <HomeIcon className='h-5 w-5' /> <p>Home</p>
        </button>

        <button className='flex items-center space-x-3 hover:text-white'>
          <SearchIcon className='h-5 w-5' /> <p>Search</p>
        </button>

        <button className='flex items-center space-x-3 hover:text-white'>
          <LibraryIcon className='h-5 w-5' /> <p>Your Library</p>
        </button>
      </div>

      <div className='space-y-5 mt-10 mb-5'>
        <button className='flex items-center space-x-3 hover:text-white'>
          <PlusCircleIcon className='h-5 w-5' /> <p>Create Playlist</p>
        </button>

        <button className='flex items-center space-x-3 hover:text-white'>
          <HeartIcon className='h-5 w-5' /> <p>Liked Songs</p>
        </button>
      </div>

      <hr className='border-t-[0.5px] border-gray-900' />

      {/* Playlist */}
      <div className='py-3 space-y-2'>
        {playlists?.map((item) => (
          <p
            key={item.id}
            className='py-1 pr-1 cursor-pointer hover:text-white'
            onClick={() => setPlaylistId(item.id)}
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
