import styled from 'styled-components'

//import { AlurakutStyles } from '../src/lib/AlurakutCommons'
import { MainGrid } from '../src/components/MainGrid'
import { Box } from '../src/components/Box'

import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/alurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


function ProfileSideBar(props){
  return (
    <Box>
        <img src={`https://github.com/${props.gitUser}.png`}/>
    </Box>
  )
}

export default function Home() {
  const gitUser = 'Jose-Vinicius'
  const pessoasFavoritas = ['juunegreiros', 'mariosouto', 'rafaballerini', 'marcobrunodev', 'felipefialho']

  return (
    <>
      <AlurakutMenu githubUser={gitUser}/>
        <MainGrid>
          <div className="profileArea" style={{ gridArea: 'profileArea'}}>
            <ProfileSideBar gitUser={gitUser}/>
          </div>
          <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
            <Box>
              <h1 className="title">bem vindo(a) @{gitUser}</h1>

              <OrkutNostalgicIconSet />
            </Box>
          </div>
          <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
            <ProfileRelationsBoxWrapper>
              <h2 className="smallTitle">
                Pessoas da comunidade  ({pessoasFavoritas.length})
              </h2>
              <ul>
                {pessoasFavoritas.map((item) =>{
                  return (
                    <li>
                      <a href={`/users/${item}`} key={item}>
                        <img src={`https://github.com/${item}.png`} />
                        <span>{item}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </ProfileRelationsBoxWrapper>
          </div>
        </MainGrid>
    </>
  )
}

//

//