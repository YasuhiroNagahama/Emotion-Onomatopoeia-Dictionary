class Emotion {
  // カテゴリーに応じた文章をオブジェクトとして保存
  static dictionary = {
    bark: "the sound made by a dog",
    grunt: "issue a low, animal-like noise",
    roar: "make a loud noise, as of an animal",
    whack: "the act of hitting vigorously",
    smack: "a blow from a flat object (as an open hand)",
    hiss: `make a sharp, elongated "s" sound`,
    ahem: "the utterance of a sound similar to clearing the throat",
    bawl: "cry loudly",
    bling: "flashy, ostentatious jewelry",
    boom: "a deep prolonged loud noise",
    buzz: "the sound of rapid vibration",
    caw: "utter a cry, characteristic of crows, rooks, or ravens",
    chatter: "talk socially without exchanging too much information",
    chant: "a repetitive song in which syllables are assigned to a tone",
    clatter:
      "a continuous rattling sound as of hard objects falling or striking each other.",
    clunk: "a heavy dull sound (as made by impact of heavy objects)",
    crawl:
      "move forward on the hands and knees or by dragging the body close to the ground.",
    flick: "throw or toss with a quick motion",
    giggle: "a light, silly laugh.",
    gargle:
      "an act or instance or the sound of washing one's mouth and throat with a liquid kept in motion by exhaling through it.",
    honk: "the cry of a goose or any loud sound resembling it",
    oink: "the short low gruff noise of the kind made by hogs",
    whine: "a complaint uttered in a plaintive way",
    waah: "sound made when crying by babies",
    zing: "sound my by something energetic",
  };

  // カテゴリーに応じた画像をオブジェクトとして保存
  static pictureDictionary = {
    bark: "https://cdn.pixabay.com/photo/2013/07/25/11/59/german-shepherd-166972_1280.jpg",
    grunt: "https://cdn.pixabay.com/photo/2010/11/29/nepal-419__480.jpg",
    roar: "https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_1280.jpg",
    whack:
      "https://cdn.pixabay.com/photo/2017/10/27/11/49/boxer-2894025_1280.jpg",
    smack:
      "https://cdn.pixabay.com/photo/2015/03/20/19/38/hammer-682767_1280.jpg",
    hiss: "https://cdn.pixabay.com/photo/2016/10/13/23/30/cat-1739091_1280.jpg",
    ahem: "https://cdn.pixabay.com/photo/2014/03/13/10/12/man-286476_1280.jpg",
    bawl: "https://cdn.pixabay.com/photo/2015/06/26/10/17/smiley-822365_960_720.jpg",
    bling:
      "https://cdn.pixabay.com/photo/2017/12/30/13/37/happy-new-year-3050088_1280.jpg",
    boom: "https://cdn.pixabay.com/photo/2016/04/12/21/17/explosion-1325471_1280.jpg",
    buzz: "https://cdn.pixabay.com/photo/2020/02/13/10/29/bees-4845211_1280.jpg",
    caw: "https://cdn.pixabay.com/photo/2017/02/16/11/13/bird-2071185_1280.jpg",
    chatter:
      "https://cdn.pixabay.com/photo/2015/12/08/12/55/people-1082897_1280.jpg",
    chant:
      "https://cdn.pixabay.com/photo/2016/07/19/07/43/parchment-1527650__340.jpg",
    clatter:
      "https://cdn.pixabay.com/photo/2020/02/06/19/01/clutter-4825256_1280.jpg",
    clunk:
      "https://cdn.pixabay.com/photo/2017/01/10/03/06/steel-1968194_1280.jpg",
    crawl:
      "https://cdn.pixabay.com/photo/2017/11/23/07/47/baby-2972221__340.jpg",
    flick:
      "https://cdn.pixabay.com/photo/2012/02/23/08/48/disgust-15793_1280.jpg",
    giggle:
      "https://cdn.pixabay.com/photo/2017/08/07/15/18/people-2604850_1280.jpg",
    gargle:
      "https://cdn.pixabay.com/photo/2017/04/03/16/32/girl-smoke-cigarette-2198839_1280.jpg",
    honk: "https://cdn.pixabay.com/photo/2017/02/28/14/37/geese-2105918_1280.jpg",
    oink: "https://cdn.pixabay.com/photo/2019/03/02/15/32/pig-4030013_1280.jpg",
    whine:
      "https://cdn.pixabay.com/photo/2020/05/01/01/57/girl-5115192_960_720.jpg",
    waah: "https://cdn.pixabay.com/photo/2017/01/18/02/18/emotions-1988745_1280.jpg",
    zing: "https://cdn.pixabay.com/photo/2017/09/14/16/38/fiber-optic-2749588_1280.jpg",
  };

  // 色に応じた背景色をオブジェクトとして保存
  static backgroundcolor = {
    skyblue: "info",
    blue: "primary",
    red: "danger",
    green: "success",
    yellow: "warning",
    gray: "secondary",
    white: "white",
    black: "dark",
  };

  // 感情に応じた絵をオブジェクトとして穂zん
  static face = {
    sad: "😭",
    happy: "😁",
    surprised: "😬",
    fearful: "🥶",
    angry: "😡",
    bad: "🤢",
    disgusted: "😩",
  };

  constructor(emotion, description, color, onomatopoeia) {
    this.emotion = emotion;
    this.description = description;
    this.color = color;
    this.onomatopoeia = onomatopoeia;
  }

  // カテゴリーのリストを作成するメソッド
  createCategoryList() {
    const categoryList = document.createElement("div");
    categoryList.classList.add(
      "category-list-wrapper",
      "d-flex",
      "justify-content-center",
      "align-items-center",
      "flex-wrap",
      "gap-3",
      "my-5"
    );

    for (let i = 0; i < this.onomatopoeia.length; i++) {
      categoryList.innerHTML += `
        <div class="category-item d-flex justify-content-between align-items-center bg-white w-100 gap-2 px-2">
          <div class="category-desc">
            <p class="category-type h3">${this.onomatopoeia[i]}</p>
            <p class="category-text h6">${
              Emotion.dictionary[this.onomatopoeia[i]]
            }</p>
          </div>
          <div class="category-img-wrapper">
            <img src="${
              Emotion.pictureDictionary[this.onomatopoeia[i]]
            }" alt="画像が存在しません" class="category-img">
          </div>
        </div>
      `;
    }

    return categoryList;
  }

  // カテゴリーのカードを作成するメソッド
  createCategoryCard(index) {
    const categoryCard = document.createElement("div");
    categoryCard.classList.add(
      "category-card",
      `bg-${Emotion.backgroundcolor[this.color]}`,
      "p-3"
    );
    categoryCard.id = `sec${index}`;
    categoryCard.innerHTML = `
    <h1 class="category-title h1 text-white text-left">${this.emotion}</h1>
    <p class="category-desc h5 text-white">${this.description}</p>`;

    categoryCard.append(this.createCategoryList());

    return categoryCard;
  }

  // 感情のカード（クリックできる感情カテゴリのカード）を作成するメソッド
  createEmotionCard(index) {
    const emotionCard = document.createElement("div");
    emotionCard.innerHTML = `
  <a href="#sec${index}" class="text-decoration-none">
    <div class="bg-${
      Emotion.backgroundcolor[this.color]
    } emotion-card p-3 text-center">
        <h2 class="emotion-type h2 text-white">${this.emotion}</h2>
        <p class="emotion-face">${Emotion.face[this.emotion]}</p>
        <p class="emotion-desc h5 text-white">${this.description}</p>
    </div>
  </a>
`;

    return emotionCard;
  }
}

// 感情についての情報を配列として保存
const emotionInfoList = [
  new Emotion(
    "angry",
    "feeling or showing strong annoyance, displeasure, or hostility; full of anger.",
    "red",
    ["bark", "grunt", "roar", "whack", "smack", "hiss"]
  ),
  new Emotion(
    "happy",
    "feeling or showing pleasure or contentment.",
    "yellow",
    ["bling", "chatter", "chant", "giggle"]
  ),
  new Emotion(
    "bad",
    "not such as to be hoped for or desired; unpleasant or unwelcome.",
    "skyblue",
    ["ahem", "clatter", "clunk"]
  ),
  new Emotion("sad", "feeling or showing sorrow; unhappy.", "gray", [
    "bawl",
    "whine",
    "waah",
  ]),
  new Emotion("surprised", "to feel mild astonishment or shock.", "blue", [
    "boom",
    "honk",
    "zing",
  ]),
  new Emotion("fearful", "feeling afraid; showing fear or anxiety.", "green", [
    "buzz",
    "caw",
    "crawl",
  ]),
  new Emotion(
    "disgusted",
    "feeling or showing strong annoyance, displeasure, or hostility; full of anger.",
    "black",
    ["flick", "gargle", "oink"]
  ),
];

// emotionInfoList配列内の各要素に対してcreateEmotionCardメソッド、createCategoryCardメソッドを呼び出し、画面に表示する関数
function displayEmotionInfo() {
  const contens = document.getElementById("target");

  const emotionCardWrap = document.createElement("div");
  emotionCardWrap.classList.add(
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "flex-wrap",
    "gap-3",
    "py-5"
  );

  const categoryCardWrap = document.createElement("div");
  categoryCardWrap.classList.add("category-card-wrapper");

  for (let i = 0; i < emotionInfoList.length; i++) {
    emotionCardWrap.append(emotionInfoList[i].createEmotionCard(i));
    categoryCardWrap.append(emotionInfoList[i].createCategoryCard(i));
  }

  contens.append(emotionCardWrap);
  contens.append(categoryCardWrap);
}

displayEmotionInfo();
