import React, { useState } from 'react';
import { Compass, Code, Palette, BookOpen, Music, Film, ShoppingBag, Gamepad } from 'lucide-react';
import SearchBar from './components/SearchBar';
import CategoryCard from './components/CategoryCard';

const categories = [
  {
    title: '常用工具',
    icon: <Compass className="w-6 h-6 text-white" />,
    links: [
      { title: '百度', url: 'https://www.baidu.com', description: '中文搜索引擎' },
      { title: '微博', url: 'https://weibo.com', description: '中国领先的社交媒体平台' },
      { title: '知乎', url: 'https://www.zhihu.com', description: '中文问答社区' }
    ]
  },
  {
    title: '开发资源',
    icon: <Code className="w-6 h-6 text-white" />,
    links: [
      { title: 'GitHub', url: 'https://github.com', description: '代码托管平台' },
      { title: 'Stack Overflow', url: 'https://stackoverflow.com', description: '程序员问答社区' },
      { title: '掘金', url: 'https://juejin.cn', description: '开发者技术社区' }
    ]
  },
  {
    title: '设计灵感',
    icon: <Palette className="w-6 h-6 text-white" />,
    links: [
      { title: 'Dribbble', url: 'https://dribbble.com', description: '设计师作品展示平台' },
      { title: 'Behance', url: 'https://www.behance.net', description: '创意作品集平台' },
      { title: '花瓣', url: 'https://huaban.com', description: '图片素材收集平台' }
    ]
  },
  {
    title: '学习教育',
    icon: <BookOpen className="w-6 h-6 text-white" />,
    links: [
      { title: '中国大学MOOC', url: 'https://www.icourse163.org', description: '在线课程平台' },
      { title: '网易公开课', url: 'https://open.163.com', description: '免费教育视频' },
      { title: '腾讯课堂', url: 'https://ke.qq.com', description: '在线教育平台' }
    ]
  },
  {
    title: '音乐娱乐',
    icon: <Music className="w-6 h-6 text-white" />,
    links: [
      { title: '网易云音乐', url: 'https://music.163.com', description: '音乐流媒体服务' },
      { title: 'QQ音乐', url: 'https://y.qq.com', description: '在线音乐平台' },
      { title: '虾米音乐', url: 'https://www.xiami.com', description: '个性化音乐推荐' }
    ]
  },
  {
    title: '视频媒体',
    icon: <Film className="w-6 h-6 text-white" />,
    links: [
      { title: 'Bilibili', url: 'https://www.bilibili.com', description: '视频弹幕网站' },
      { title: '优酷', url: 'https://www.youku.com', description: '在线视频平台' },
      { title: '腾讯视频', url: 'https://v.qq.com', description: '在线视频服务' }
    ]
  },
  {
    title: '购物网站',
    icon: <ShoppingBag className="w-6 h-6 text-white" />,
    links: [
      { title: '淘宝', url: 'https://www.taobao.com', description: '综合购物平台' },
      { title: '京东', url: 'https://www.jd.com', description: '电商购物网站' },
      { title: '拼多多', url: 'https://www.pinduoduo.com', description: '社交电商平台' }
    ]
  },
  {
    title: '游戏娱乐',
    icon: <Gamepad className="w-6 h-6 text-white" />,
    links: [
      { title: 'Steam', url: 'https://store.steampowered.com', description: '游戏发行平台' },
      { title: '游民星空', url: 'https://www.gamersky.com', description: '游戏资讯网站' },
      { title: '3DM游戏网', url: 'https://www.3dmgame.com', description: '综合游戏门户' }
    ]
  }
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter(category => 
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.links.some(link => 
      link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-8">导航站点</h1>
          <div className="w-full max-w-2xl">
            <SearchBar onSearch={setSearchQuery} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              icon={category.icon}
              links={category.links}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;