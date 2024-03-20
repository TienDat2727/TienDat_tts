import { MailOutlined, FacebookOutlined, TikTokOutlined, DiscordOutlined } from '@ant-design/icons';
interface SidebarLoginProps {
    content: string
}

const SidebarLogin = ({content}: SidebarLoginProps) => {
  return (
    <>
    <div className='social-icons'>
        <a href="#" className='icon'><MailOutlined/></a>
        <a href="#" className='icon'><FacebookOutlined/></a>
        <a href="#" className='icon'><TikTokOutlined/></a>
        <a href="#" className='icon'><DiscordOutlined/></a>
    </div>
    <span>{content}</span>
    </>
  )
}

export default SidebarLogin