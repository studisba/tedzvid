import React from 'react';

// Bootstrap
import {Row, Col} from 'react-bootstrap';

// Other
import '../App.scss';
import Arabic from '../Letters/Arabic';
import Player from '../Player/Player';

function L6() {
    const vertSeparator = ' • ';
    return (
        <React.Fragment>
        <Row>
          <Col>
            <h2 className="text-center font-weight-bold">IDGAM MEAL-GUNNEH</h2>
            <h4 className="text-center">uklapanje sa propuštanjem zraka kroz nos</h4>
            <hr/>
          </Col>
        </Row>
        <Row>
          <Col className="opisLekcije">
          Kada poslije harfa N sa sukunom (نْ) ili tenvina EN  ــــــًــــــ, IN ـــــٍــــــ , UN  ــــــٌـــــ dođe jedan od četiri harfa: <Arabic bold={true}>ي م ن و</Arabic> (sadržana u riječi jemnu – يَمْنُو), dolazi do uklapanja harfa N (ن) u jedan od spomenuta četiri harfa, propuštajući zrak kroz nos u trajanju od 2 hareketa, npr.:
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Player url='../assets/audio/l6/1.mp3'>
              <Arabic
                arabic = 'نْ نَ‍‍'
              >مَ‍نْ نَ‍‍شَٓاءُ</Arabic>
            </Player> čita se:
            <Player url='../assets/audio/l6/2.mp3'>
              <Arabic
                arabic = 'نَّ‍'
              >مَ‍‍نَّ‍‍شَٓاءُ</Arabic>
            </Player> {vertSeparator}
            <Player url='../assets/audio/l6/3.mp3'>
              <Arabic
                arabic = 'ةً مِ‍'
              >نِعْمَ‍‍ةً مِ‍‍نْهُ</Arabic>
            </Player> čita se:
            <Player url='../assets/audio/l6/4.mp3'>
              <Arabic
                arabic = '‍ةَ مِّ‍'
              >نِعْمَ‍‍ةَ مِّ‍نْه</Arabic>
            </Player>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <Player url='../assets/audio/l6/6.mp3'>
              <Arabic
                arabic = 'لٌ مِنْ مَ‍'
              >فِي جِيدِهَا حَبْ‍لٌ مِنْ مَ‍سَدٍ</Arabic>
            </Player> ؛
            <Player url='../assets/audio/l6/5.mp3'>
              <Arabic
                arabic = 'ئًا نُ‍'
              >لَـقَدْ جِئْتَ شَيْـئًا نُ‍كْرًا</Arabic>
            </Player>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <Player url='../assets/audio/l6/7.mp3'>
              <Arabic
                arabic = 'فًا مُ‍'
              >كَانَ حَنِي‍فًا مُ‍ـسْلِمًا</Arabic>
              <Arabic
                arabic = 'يًّا وَ‍'
              >نَصْرَانـِيًّا وَ‍لٰكِنْ</Arabic>
              <Arabic
                arabic = 'يًّا وَ'
              >مَا كَانَ إِبْـرَاهِيمُ يَهُودِيًّا وَلَا</Arabic>
            </Player>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <h2 className="text-center">VJEŽBA</h2>
            <hr/>
          </Col>
        </Row>
        <Row className="mt-2">
            <Col className="text-center">
              <Player url='../assets/audio/l6/9.mp3'>
                <Arabic
                  arabic = 'لًا'
                >وَقَالُوا نَحْنُ أَكْثَرُ أَمْـوَالًا</Arabic>
              </Player>
              ۞<Player url='../assets/audio/l6/8.mp3'>
                <Arabic
                  arabic = 'رًا يَ‍'
                >مِثْقَالَ ذَرَّةٍ خَيْـرًا يَ‍رَهُ</Arabic>
                <Arabic
                  arabic = '‍نْ يَ‍'
                >فَمَ‍‍نْ يَ‍ـعْمَلْ</Arabic>
              </Player>

              ۞<Player url='../assets/audio/l6/10.mp3'>
                <Arabic
                  arabic = 'شًا'
                >اَلَّذِي جَعَلَ لَكُمُ الْأَرْضَ فِرَاشًا</Arabic>
              </Player>
              ۞<Player url='../assets/audio/l6/11.mp3'>
                <Arabic
                  arabic = 'دًا وَ'
                >لَادًا وَمَا نَحْنُ بِمُعَذَّبِينَ</Arabic>
                <Arabic
                  arabic = 'وَ'
                >وَأَوْلَ</Arabic>
                <Arabic
                  arabic = 'لًا'
                >اَلَّذِي جَمَعَ مَالًا</Arabic>
              </Player>

                ۞<Arabic
                  arabic = 'ءً وَ'
                >بِنَٓاءً وَأَنْـزَلَ مِنَ السَّمَٓاءِ مَٓاءً</Arabic>
                <Arabic
                  arabic = 'وَ'
                >وَالسَّمَٓاءَ</Arabic>
                ۞<Player url='../assets/audio/l6/12.mp3'>
                  <Arabic
                    arabic = 'وَ'
                  >وَبَرْقٌ</Arabic>
                  <Arabic
                    arabic = 'دٌ'
                  >رَعْدٌ</Arabic>
                  <Arabic
                    arabic = 'تٌ وَ'
                  >السَّمَٓاءِ فِيهِ ظُلُمَاتٌ وَ</Arabic>
                  <Arabic
                    arabic = 'بٍ مِ'
                  >أَوْ كَصَيِّبٍ مِنَ</Arabic>
                </Player>

                ۞<Player url='../assets/audio/l6/14.mp3'>
                  <Arabic
                    arabic = 'وَ'
                  >وَعَدَّدَهُ</Arabic>
                  <Arabic
                    arabic = 'ةٌ يَ'
                  >أُمَّةٌ يَدْعُونَ إِلَى</Arabic>
                  <Arabic
                    arabic = 'ـنْ مِ'
                  >وَلْتَكُـنْ مِنْكُمْ</Arabic>
                </Player>
                ۞<Player url='../assets/audio/l6/13.mp3'>
                  <Arabic
                    arabic = 'نٌ مِ'
                  >ضْوَانٌ مِنَ اللّٰهِ</Arabic>
                  <Arabic
                    arabic = 'ةٌ وَ'
                  >ةٌ وَرِ</Arabic>
                  <Arabic
                    arabic = 'جٌ مُ'
                  >وَأَزْوَاجٌ مُطَهَّرَ</Arabic>
                  <Arabic
                  >الْخَيْرِ</Arabic>
                </Player>
            </Col>
        </Row>

        </React.Fragment>
    );
  }

  export default L6;