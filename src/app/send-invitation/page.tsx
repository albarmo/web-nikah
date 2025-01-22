import React from 'react'
import { generateInvitationLink } from '../shared/func/invitation'

export default function SendInvitation() {
    const data = generateInvitationLink()

    return (
        <div>
            <div className="relative overflow-x-auto sm:rounded-lg p-2.5">
                <h1 className='font-semibold text-xl'>Invitation</h1>
                <p>Total : {data?.length}</p>
                <table className="w-full mt-2.5 text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-1 py-3">
                                name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((guest, _idx) =>
                            <tr key={_idx} className="odd:bg-white  even:bg-gray-50">
                                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                    {_idx + 1}
                                </th>
                                <th scope="row" className="px-1 py-4 font-medium text-black whitespace-nowrap">
                                    {guest?.to}
                                </th>
                                <td className="px-6 py-4">
                                    <a href={guest.url} target='_blank' className="font-medium text-blue-600 hover:underline">Send</a>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

