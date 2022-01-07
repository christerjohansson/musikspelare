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

import { useRecoilValue } from 'recoil';
import { playlistDataAtom } from '../atoms/playlistAtom';
import SongsHeader from './SongsHeader';
import Song from './Song';

const AllSongs = () => {
  const playListData = useRecoilValue(playlistDataAtom);

  return (
    <div className='px-8 text-white space-y-1.5 mt-8 pb-12'>
      <SongsHeader />

      <div className='pt-3 space-y-1.5'>
        {playListData?.tracks?.items?.map((item, i) => (
          <Song key={item.track.id} index={i} track={item} />
        ))}
      </div>
    </div>
  );
};

export default AllSongs;
