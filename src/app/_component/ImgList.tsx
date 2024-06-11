'use client'
import style from './imgSection.module.css'
import ImgItem from './ImgItem'
import { Image } from '@/model/Image'
import { useEffect, useState } from 'react'
//? AutoSizer : 부모 element의 너비와 높이를 자식 컴포넌트에 전달해주는 고차컴포넌트(HOC)
//* 부모 el의 너비와 높이 만큼 자식을 꽉채운다
//? List : 구성요소의 창 목록 (행)을 렌더링
import {
  AutoSizer,
  ScrollEventData,
  Grid,
  WindowScroller,
} from 'react-virtualized'
import { getImages } from '../_lib/getImages'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'

type Props = {
  images: Image[]
}
export default function ImgList({ images }: Props) {
  const [imageData, setImageData] = useState(images)
  const [nextImageData, setNextImageData] = useState(false)
  let prevHeight = (images.length / 6) * 447 + 20
  const [scrollHeight, setScrollHeight] = useState(prevHeight)

  const pathName = usePathname().substring(9)
  console.log(pathName)
  console.log('imageData', imageData)
  // const scrollListener = async (params: ScrollEventData) => {
  //   console.log('scrollTop', params.scrollTop)
  //   console.log('clientHeight', params.clientHeight)
  //   console.log('scrollHeight', params.scrollHeight)
  //   console.log(
  //     'scrollTop + clientHeight :',
  //     params.scrollTop + params.clientHeight,
  //     '>= params.scrollHeight - 300 :',
  //     params.scrollHeight - 300,
  //   )
  //   if (params.scrollTop + params.clientHeight >= params.scrollHeight - 300) {
  //     //* scrollTop: 현재 스크롤의 위치
  //     //* clientHeight: 보이는 영역의 높이
  //     //! scrollTop + clientHeight = 현재 보이는 영역의 하단 위치
  //     //* scrollHeight: 전체 스크롤 높이
  //     //! scrollHeight(전체 리스트의 높이) - 300px = 현재 보이는 영역의 하단이 전체 리스트의 높이에서 300픽셀 이내
  //     // 조건이 참이 되는 경우 사용자가 거의 끝까지 스크롤을 했다.

  //     console.log('조건문 통과')
  //     const newImages = await getImages(pathName)
  //     setImageData((prevImages) => [...prevImages, ...(newImages || [])])
  //   }
  // }

  useEffect(() => {
    const scrollListener = async () => {
      const scrollTop = window.scrollY
      const clientHeight = document.documentElement.clientHeight
      const scrollHeight = document.documentElement.scrollHeight
      let nextPageDate = 1
      console.log('scrollTop', scrollTop)
      console.log('clientHeight', clientHeight)
      console.log('scrollHeight', scrollHeight)

      if (scrollTop + clientHeight >= scrollHeight - 300) {
        console.log('끝에 도달')
        const nextImage = (await getImages(++nextPageDate, pathName)) as Image[]
        console.log('nextImage', nextImage)
        setImageData((prevImageData) => [...prevImageData, ...nextImage])
        setScrollHeight((prevHeight) => prevHeight * 2)
      }
    }
    window.addEventListener('scroll', scrollListener)
  }, [])

  // let plusHeight = prevHeight * 2

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const images = (await getImages(pathName)) as Image[]
  //     // setImageData(images)
  //   }
  //   fetchData()
  // }, [imageData])

  const image = imageData
  return (
    <div className={style.img_list}>
      {images.length}
      <AutoSizer>
        {({ width, height }) => (
          <Grid
            cellRenderer={({ columnIndex, key, rowIndex, style }) => (
              <div key={key} style={style}>
                <ImgItem
                  key={image[rowIndex * 6 + columnIndex].id}
                  image={image[rowIndex * 6 + columnIndex]}
                />
              </div>
            )}
            columnCount={6} // 열의 개수를 지정
            columnWidth={310} // 각 열의 너비를 지정
            rowCount={images.length / 6} //* 렌더링할 행의 총 개수
            rowHeight={447} // 항목의 높이 = 각 행의 높이
            width={width} // 항목의 너비
            // height={height}
            gridGap={20}
            height={scrollHeight}
            // height={(images.length / 6) * 447 + 20} // 실제 렌더링되는 리스트의 높이
            // containerStyle={{ width: '100%', maxWidth: '100%' }}
            // style={{ height: 'auto' }}
          />
        )}
      </AutoSizer>
    </div>
  )
}
