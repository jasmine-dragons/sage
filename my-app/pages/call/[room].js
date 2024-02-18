import { useRouter } from 'next/router'

const room = () => {
    const router = useRouter()
    return <div>{router.query.room}</div>
}
export default room;
