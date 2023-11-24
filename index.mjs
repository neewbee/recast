import * as acorn from 'acorn'
import jsxParser from 'acorn-jsx'

import * as recast from 'recast'

var JSXParser = acorn.Parser.extend(jsxParser());

const result = JSXParser.parse(`<div className='case__content'>
      <div className='case__content__go-back'>
        <div
          className='case__content__go-back__image'
          onClick={() => navigate('/?page=case')}
        ></div>
      </div>
      <div className='case__content__item'>
        <div
          className='case__content__item__image'
          style={{ background: 'url("/pics/cases/amiro-frida-kahlo.png") center/cover no-repeat' }}
          onClick={() => navigate('/case/amiro-frida-kahlo')}
        ></div>
        <div className='case__content__item__text'>
          <Link className='case__content__item__text__title' to='/case/amiro-frida-kahlo'>
            AMIRO觅光 × FRIDA KAHLO®： “无尽觅光，热烈绽放”
          </Link>
          <div className='case__content__item__text__body'>
            美丽不被定义，向阳无尽觅光
            <div>AMIRO觅光 x FRIDA KAHLO®以觅光的太阳花之名</div>
            <div>呼唤不羁、热烈、生命万岁，开启一段“美丽与艺术”的探索旅程</div>
          </div>
          <div className='case__content__item__text__footer'>发布时间：2023-06-02</div>
        </div>
      </div>
      <div className='case__content__item'>
        <div
          className='case__content__item__image'
          style={{ background: 'url("/pics/cases/olay-smiley.jpg") center/cover no-repeat' }}
          onClick={() => navigate('/case/olay-smiley')}
        ></div>
        <div className='case__content__item__text'>
          <Link className='case__content__item__text__title' to='/case/olay-smiley'>
            OLAY × SmileyWorld：打造身体SPA级的快乐体验
          </Link>
          <div className='case__content__item__text__body'>
            专业护肤领导品牌OLAY玉兰油携手SmileyWorld，洞察新女性审美价值观倾听女性需求，将微笑融入到全新身体护理系列，FIPO与双方共建推出限定联名超润家族礼盒，内含沐浴磨砂膏，护手霜，身体乳，带来限定快乐3部曲。{' '}
          </div>
          <div className='case__content__item__text__footer'>发布时间：2021-10-25</div>
        </div>
      </div>
      <div className='case__content__item'>
        <div
          className='case__content__item__image'
          style={{
            background: 'url("/pics/cases/kipling-frida-kahlo.jpg") center/cover no-repeat',
          }}
          onClick={() => navigate('/case/kipling-frida-kahlo')}
        ></div>
        <div className='case__content__item__text'>
          <Link className='case__content__item__text__title' to='/case/kipling-frida-kahlo'>
            Kipling × FRIDA KAHLO®：“袋”你感受缤纷秋意
          </Link>
          <div className='case__content__item__text__body'>
            知名休闲时尚箱包品牌Kipling秉持「Live.Light」的理念，在女性精神力量的推动下与Frida
            Kahlo®联名。作为FRIDA
            KAHLO®在大中华区唯一授权合作方的FIPO与双方共建推出联名包袋系列，在全球多个地区发售。
          </div>
          <div className='case__content__item__text__footer'>发布时间：2023-09-22</div>
        </div>
      </div>
      <div className='case__content__item'>
        <div
          className='case__content__item__image'
          style={{
            background: 'url("/pics/cases/j-lindeberg-mark-wigan.jpg") center/cover no-repeat',
          }}
          onClick={() => navigate('/case/j-lindeberg-mark-wigan')}
        ></div>
        <div className='case__content__item__text'>
          <Link className='case__content__item__text__title' to='/case/j-lindeberg-mark-wigan'>
            J.Lindeberg × Mark Wigan：诠释爱的“型”态
          </Link>
          <div className='case__content__item__text__body'>
            享誉全球的时尚运动品牌J.LINDEBERG邀请国际知名视觉艺术家Mark
            Wigan以情人节为特定主题为新品创作。作为Mark
            Wigan在大中华区的独家授权合作方的FIPO与双方共建推出情人节限定系列时尚单品，诠释爱的万千“型”态。
          </div>
          <div className='case__content__item__text__footer'>发布时间：2021-01-31</div>
        </div>
      </div>

      <div className='case__content__item'>
        <div
          className='case__content__item__image'
          style={{
            background: 'url("/pics/cases/girlcult-frida-kahlo.jpg") center/cover no-repeat',
          }}
          onClick={() => navigate('/case/girlcult-frida-kahlo')}
        ></div>
        <div className='case__content__item__text'>
          <Link className='case__content__item__text__title' to='/case/girlcult-frida-kahlo'>
            Girlcult × FRIDA KAHLO®：玩转彩妆探索超现实主义美学
          </Link>
          <div className='case__content__item__text__body'>
            国货美妆品牌Girlcult与FridaKahlo®联合开启超现实主义美学探索。FIPO与双方共建推出联名「生命万岁」系列：将Frida的故事、作品和迷人的精神内核融入自由眼眉笔、贪恋唇釉和万物生长眼影盘的彩妆设计之中。{' '}
          </div>
          <div className='case__content__item__text__footer'>发布时间：2023-09-28</div>
        </div>
      </div>

      <div className='case__content__item'>
        <div
          className='case__content__item__image'
          style={{
            background: 'url("/pics/cases/peacebird-fabio.jpg") center/cover no-repeat',
          }}
          onClick={() => navigate('/case/peacebird-fabio')}
        ></div>
        <div className='case__content__item__text'>
          <Link className='case__content__item__text__title' to='/case/peacebird-fabio'>
            太平鸟成人 × Fabio：助你轻松“玩”胜寒冷
          </Link>
          <div className='case__content__item__text__body'>
            知名时尚品牌太平鸟邀请“羽绒殿堂级大师”Fabio del
            bianco操刀设计2021秋冬单品，FIPO与双方共建推出“SNOWBIRD”轻户外系列，采用高端白鹅绒填充和国外一线环保染色技术，保暖、防风防寒，易于滑雪。
          </div>
          <div className='case__content__item__text__footer'>发布时间：2021-10-26</div>
        </div>
      </div>

      <div className='case__content__item'>
        <div
          className='case__content__item__image'
          style={{
            background: 'url("/pics/cases/holiland-smiley.jpg") center/cover no-repeat',
          }}
          onClick={() => navigate('/case/holiland-smiley')}
        ></div>
        <div className='case__content__item__text'>
          <Link className='case__content__item__text__title' to='/case/holiland-smiley'>
            好利来 × SMILEY：玩味糕点礼盒传递中秋笑意
          </Link>
          <div className='case__content__item__text__body'>
            近年来，随着消费者的生活重心逐渐转向精神世界，获得情绪价值和内心满足逐渐成为一种消费趋势。在此背景下，品牌通过「情绪营销」与消费者共情，向年轻人传递积极快乐的能量成为营销主旋律。
          </div>
          <div className='case__content__item__text__footer'>发布时间：2023-09-29</div>
        </div>
      </div>

      <div className='case__content__item'>
        <div
          className='case__content__item__image'
          style={{
            background: 'url("/pics/cases/semir-wobushipanghu.jpg") center/cover no-repeat',
          }}
          onClick={() => navigate('/case/semir-wobushipanghu')}
        ></div>
        <div className='case__content__item__text'>
          <Link className='case__content__item__text__title' to='/case/semir-wobushipanghu'>
            森马 × 我不是胖虎：解锁新年好运舒福过虎年
          </Link>
          <div className='case__content__item__text__body'>
            新春之际，国潮服饰品牌森马携手虎年顶流IP“我不是胖虎”，猛虎上身开启一整年好运buff。FIPO与双方共建推出【猛虎暴富】联名系列，憨态可掬的老虎潮服和衍生品虎爪暖手抱枕，给人满满的亲切治愈感。
          </div>
          <div className='case__content__item__text__footer'>发布时间：2022-01-22</div>
        </div>
      </div>

      <div className='case__content__item'>
        <div
          className='case__content__item__image'
          style={{
            background: 'url("/pics/cases/balabala-pokemon.jpg") center/cover no-repeat',
          }}
          onClick={() => navigate('/case/balabala-pokemon')}
        ></div>
        <div className='case__content__item__text'>
          <Link className='case__content__item__text__title' to='/case/balabala-pokemon'>
            balabala × 宝可梦：原力穿搭释放孩童想象！
          </Link>
          <div className='case__content__item__text__body'>
            最懂孩子成长的儿童时尚品牌balabala牵手全球最具影响力的ACG
            IP宝可梦，FIPO与双方共建，围绕“原力创想”合作主题，将宝可梦的活力能量赋予系列服饰：以皮卡丘为主要设计元素凸显造型萌趣感，打破真实与虚拟的次元壁。
          </div>
          <div className='case__content__item__text__footer'>发布时间：2022-03-23</div>
        </div>
      </div>

      <div className='case__content__item'>
        <div
          className='case__content__item__image'
          style={{
            background: 'url("/pics/cases/anta-china-aerospace.jpg") center/cover no-repeat',
          }}
          onClick={() => navigate('/case/anta-china-aerospace')}
        ></div>
        <div className='case__content__item__text'>
          <Link className='case__content__item__text__title' to='/case/anta-china-aerospace'>
            安踏儿童 × 中国航天：硬核科技演绎童装新风尚
          </Link>
          <div className='case__content__item__text__body'>
            2022年“中国航天日”，国内领先的儿童运动品牌安踏儿童与中国航天·神舟传媒联合，在FIPO的助力下推出中国航天特别款专业跑步装备，以“太空跑者”为灵感，通过独特的星云纱线点缀致敬中国航天，激励儿童对宇宙的探索。
          </div>
          <div className='case__content__item__text__footer'>发布时间：2022-04-15</div>
        </div>
      </div>

      <div className='case__content__item'>
        <div
          className='case__content__item__image'
          style={{
            background: 'url("/pics/cases/looney-tunes-13de-marzo.jpg") center/cover no-repeat',
          }}
          onClick={() => navigate('/case/looney-tunes-13de-marzo')}
        ></div>
        <div className='case__content__item__text'>
          <Link className='case__content__item__text__title' to='/case/looney-tunes-13de-marzo'>
            13DeMarzo × 乐一通：活力畅享潮酷穿搭妙趣
          </Link>
          <div className='case__content__item__text__body'>
            潮流设计师品牌13DeMarzo携手经典卡通IP《乐一通》，FIPO与双方共建推出联名系列服饰，拉开满载新奇与灿烂的风尚序幕。乐一通的经典标识融入廓形剪裁和标识玩偶，将纯真与想象力贮存于视觉记忆，释放欢乐妙趣的活力。
          </div>
          <div className='case__content__item__text__footer'>发布时间：2023-05-26</div>
        </div>
      </div>

      <div className='case__content__item'>
        <div
          className='case__content__item__image'
          style={{
            background: 'url("/pics/cases/miniev-smileyworld.jpg") center/cover no-repeat',
          }}
          onClick={() => navigate('/case/miniev-smileyworld')}
        ></div>
        <div className='case__content__item__text'>
          <Link className='case__content__item__text__title' to='/case/miniev-smileyworld'>
            宏光MINIEV × SmileyWorlda：一起向快乐出发！
          </Link>
          <div className='case__content__item__text__body'>
            当时尚马卡龙遇到快乐至上的SMILEY
            <div>会产生怎样的化学反应？</div>
          </div>
          <div className='case__content__item__text__footer'>发布时间：2023-10-23</div>
        </div>
      </div>
    
    </div>`, { ecmaVersion: '2022' })


let items = [];


recast.visit(result, {
  visitJSXOpeningElement(path) {
    console.log('visitJSXOpeningElement')
    if (path.node.name.name === 'Link') {
      // 提取标题信息

      const title = path.node.attributes.find(attr => attr.name.name === 'to').value.value;

      // 提取路由路径信息
      const routePath = path.node.attributes.find(attr => attr.name.name === 'to').value.value;

      // 构建指定的JavaScript对象
      const item = {
        title,
        content: [],
        routePath,
        backgroundPath: '',
        publishTime: '',
      };

      // 添加到数组中
      items.push(item);
    }
    return false;
  },
  visitJSXText(path) {
    console.log('visitJSXText')

    // 提取文本信息
    const text = path.value.type === 'JSXText' ? path.value.value.trim() : '';
    if (text.length > 0) {
      // 添加到当前数组元素的content中
      items[items.length - 1].content.push(text);
    }
    return false;
  },
  visitJSXAttribute(path) {
    console.log('visitJSXAttribute')
    console.log(path.node.name.name, path.value.value)
    if (path.node.name.name === 'className' && path.value.value === 'case__content__item__image') {
      // 提取背景图片信息
      console.log(path.parent)
      const parent = path.parent.children.find(child => child.type === 'JSXText');

      const backgroundImage = path.node.value.expression.properties.find(
        prop => prop.key.name === 'background'
      );
      if (backgroundImage) {
        console.log(backgroundImage)
        debugger
        console.log(backgroundImage)
        items[items.length - 1].backgroundPath = backgroundImage.value.value;
      }
    }
    if (path.node.name.name === 'className' && path.node.value.value.includes('case__content__item__text__footer')) {
      // 提取发布时间信息
      const footerText = path.parent.children.find(child => child.type === 'JSXText');
      if (footerText) {
        items[items.length - 1].publishTime = footerText.value.trim().split('：')[1];
      }
    }
    return false;
  },
});

// console.log(items);
