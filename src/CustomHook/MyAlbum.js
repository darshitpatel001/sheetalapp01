import React from 'react'
import { useEffect } from 'react'
import useFatch from './useFatch'

export default function MyAlbum() {

    const {loading,data} = useFatch("https://date.nager.at/api/v2/publicholidays/2020/US")
  return (
    <div>
    <table>
      {data.map((ele) => {
        return (
          <tr>
            <td>{ele.date}</td>
            <td>{ele.localName}</td>
            <td>{ele.name}</td>
            <td>{ele.countryCode}</td>
            <td>{ele.fixed}</td>
            <td>{ele.global}</td>
            <td>{ele.counties}</td>
            <td>{ele.launchYear}</td>
            <td>{ele.type}</td>
          </tr>
        );
      })}
    </table>
  </div>
  )
}
