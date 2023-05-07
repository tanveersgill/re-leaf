export default function Trip (props) {
    return (
        <div className='w-[100%] max-w-[360px] text-ellipsis h-auto rounded-lg shadow-md inline-block border-gray'>
                <img className='object-cover rounded-lg h-[50%]'
                    src='https://www.randomlists.com/img/animals/bald_eagle.webp'
                ></img>
                <div className='w-[100%] max-w-[360px] px-4 flex justify-between'>
                    <div className='flex-1'>
                        <h4 className='text-lg font-semibold'>Origin</h4>
                        <h5 className='text-sm font-normal break-all'>{props.origin || 'Toronto haukfdhjkashgjkdfhgjkfsdrhgjkfhiufsdhgkuffdskuh'}</h5>
                    </div>
                    <div className='flex-1'>
                        <h4 className='text-lg font-semibold'>Destination</h4>
                        <h5 className='text-sm font-normal break-all'>{props.destination || 'Berlin'}</h5>
                    </div>
                </div>
                <div className='px-4'>
                    <h4 className='text-lg font-semibold'>Price</h4>
                    <h5 className='text-sm font-normal break-all'>{props.cost || 'Toronto haukfdhjkashgjkdfhgjkfsdrhgjkfhiufsdhgkuffdskuh'}</h5>
                </div>
                <div className='px-4'>
                    <h4 className='text-lg font-semibold'>Emmisions Saved</h4>
                    <h5 className='text-sm font-normal break-all'>{props.cost || 'Toronto haukfdhjkashgjkdfhgjkfsdrhgjkfhiufsdhgkuffdskuh'}</h5>
                </div>
        </div>
    )
}