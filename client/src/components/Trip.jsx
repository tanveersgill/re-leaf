export default function Trip (props) {
    return (
        <div className='w-[100%] max-w-[360px] text-ellipsis h-auto rounded-lg shadow-md inline-block border-gray'>
                <img className='object-cover rounded-lg h-[50%]'
                    src='https://www.randomlists.com/img/animals/bald_eagle.webp'
                ></img>
                <div className='p-5 flex justify-between'>
                    <div className="grid grid-flow-col auto-cols-max">
                        
                    </div>
                    <div className='border-black border-2 border-solid'>
                        <h4 className='text-lg font-semibold'>Origin</h4>
                        <h5 className='text-sm font-normal break-all'>{props.origin || 'Toronto haukfdhjkashgjkdfhgjkfsdrhgjkfhiufsdhgkuffdskuh'}</h5>
                    </div>
                    <div className='border-black border-2 border-solid'>
                        <h4 className='text-lg font-semibold'>Destination</h4>
                        <h5 className='text-sm font-normal break-all'>{props.destination || 'Berlin'}</h5>
                    </div>
                </div>
        </div>
    )
}