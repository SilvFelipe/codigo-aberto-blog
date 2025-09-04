export function SecurityArticle() {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="text-lg leading-relaxed text-muted-foreground space-y-6">
        <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-2">
          O que é Cibersegurança?
        </h2>
        <p>
          Cibersegurança, em termos simples, é o conjunto de práticas, tecnologias e processos projetados para proteger redes, computadores, programas e dados de ataques, danos ou acessos não autorizados. Pense nisso como a segurança da sua casa, mas aplicada ao seu mundo digital. Assim como você tranca suas portas e janelas, a cibersegurança ajuda a manter seus dados e dispositivos seguros online.
        </p>

        <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-2">
          Por que a Cibersegurança é importante para você?
        </h2>
        <p>
          Você pode pensar que, por não ser uma grande empresa ou uma figura pública, não é um alvo para cibercriminosos. No entanto, isso não é verdade. Todos nós temos informações valiosas que podem ser exploradas: dados bancários, senhas, informações pessoais, fotos e documentos. Um ataque cibernético pode resultar em roubo de identidade, perdas financeiras, danos à reputação e até mesmo chantagem.
        </p>

        <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-2">
          Principais ameaças digitais
        </h2>
        <ul>
          <li>- Malware (Software Malicioso)</li>
          <li>- Phishing</li>
          <li>- Ataques de força bruta e Dicionário</li>
          <li>- Engenharia social</li>
          <li>- Ataques de negação de serviço (DoS/DDoS)</li>
          <li>- Vulnerabilidade de software</li>
        </ul>
        <p>
          Os ataques mais comuns no dia a dia são: os <b>Malwares</b>, <b>Phishing</b> e <b>Ataques de força bruta</b>. Vamos entender um pouco mais sobre eles.
        </p>
        <p>
          O <b>Phishing</b> é uma técnica de fraude online onde os criminosos se passam por entidades confiáveis (bancos, empresas, órgãos governamentais) para enganar as vítimas e fazê-las revelar informações sensíveis, como senhas, números de cartão de crédito ou dados bancários. Isso geralmente ocorre por e-mail, mensagens de texto (smishing) ou chamadas telefônicas (vishing).
           Este ataque acontece quando você recebe uma mensagem que parece legítima, com um senso de urgência ou uma oferta tentadora. Ao clicar em um link malicioso ou baixar um anexo infectado, você pode ser direcionado para um site falso que imita o original, onde suas credenciais são roubadas.
        </p>
        <p>
          Os <b>Ataques de Força Bruta</b> visam descobrir senhas tentando várias combinações. Este ataque tenta todas as combinações possíveis de caracteres até encontrar a correta. Um ataque de <b>Dicionário</b> é mais sofisticado, usando listas de palavras comuns, nomes e senhas vazadas para tentar adivinhar a senha. Por isso a utilização de senhas fortes é muito importante, isso dificulta a ação dos criminosos ao tentarem descobrir suas credenciais.
        </p>
        <p>
          <b>Malware</b> é um termo genérico para qualquer software criado com intenções maliciosas. Ele pode se apresentar de várias formas: vírus, worms, cavalos de troia, ransomware, spyware, entre outros.
        </p>

        <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-2">
          O que fazer para ficar mais seguro?
        </h2>
        <p>
          Agora que você conhece as principais ameaças, é hora de aprender como se proteger. A boa notícia é que muitas das práticas de segurança são simples e podem ser incorporadas facilmente ao seu dia a dia digital. Pequenas mudanças podem fazer uma grande diferença na sua segurança online.
        </p>
        <ul>
          <li>- Mantenha seu Software Atualizado</li>
          <li>- Use um Antivírus e Antimalware Confiável</li>
          <li>- Cuidado com Links e Anexos Suspeitos</li>
          <li>- Faça Backup Regularmente</li>
          <li>- Habilite o Firewall</li>
          <li>- Crie senhas fortes e utiliza autenticação multifator</li>
        </ul>

        <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-2">
          Senhas fortes e autenticação multifator
        </h2>
        <p>
          Suas senhas são a primeira linha de defesa para suas contas online. Uma senha fraca é como deixar a porta da sua casa destrancada. A autenticação multifator (MFA) adiciona uma camada extra de segurança, tornando muito mais difícil para criminosos acessarem suas contas, mesmo que descubram sua senha.
        </p>
        <p>
          Uma senha forte é:
          <ul className="mb-2">
            <li><b>•	Longa:</b> Quanto mais longa, melhor. Pelo menos 12 caracteres é um bom começo, mas 16 ou mais é ainda mais seguro.</li>
            <li><b>•	Complexa:</b> Inclua uma combinação de letras maiúsculas e minúsculas, números e símbolos (!, @, #, $, %, etc.).</li>
            <li><b>•	Única:</b> Nunca use a mesma senha para várias contas. Se uma conta for comprometida, todas as outras que usam a mesma senha estarão em risco.</li>
            <li><b>•	Aleatória:</b> Evite informações pessoais óbvias (datas de aniversário, nomes de pets, sequências numéricas como "123456" ou "qwerty").</li>
          </ul>
          <b>Dica:</b> Em vez de senhas complexas e difíceis de lembrar, considere usar frases-senha. Uma frase-senha é uma sequência de palavras aleatórias que formam uma frase, como "CasaAzulCachorroFeliz!7". É mais fácil de lembrar e muito mais difícil de adivinhar do que uma senha curta e complexa.
        </p>
        <p>
          A <b>Autenticação Multifator (MFA)</b>, também conhecida como Verificação em Duas Etapas (2FA), é uma medida de segurança que exige duas ou mais formas de verificação para acessar uma conta. Mesmo que um cibercriminoso descubra sua senha, ele ainda precisará da segunda forma de autenticação para entrar.
        </p>
        <p>
          As formas mais comuns de MFA incluem:
          <ul className="mb-2">
            <li><b>•	Algo que você sabe:</b> Sua senha.</li>
            <li><b>•	Algo que você tem:</b> Um código enviado para o seu celular via SMS, um aplicativo autenticador (como Google Authenticator ou Authy) que gera códigos temporários, ou uma chave de segurança física (token USB).</li>
            <li><b>•	Algo que você é:</b> Sua biometria (impressão digital, reconhecimento facial).</li>
          </ul>
        </p>
        <p>
          <b>Como funciona:</b> Ao tentar fazer login em uma conta com MFA ativado, você primeiro insere sua senha. Em seguida, o serviço solicita uma segunda verificação, como um código do seu aplicativo autenticador ou um SMS. Somente após fornecer ambas as informações, você terá acesso à conta.
          <br />
          <b>Recomendação:</b> Ative a Autenticação Multifator em todas as contas que oferecem essa opção, especialmente em e-mails, redes sociais, serviços bancários e contas de compras online. É uma das medidas de segurança mais eficazes que você pode tomar.
        </p>
        <p>
          Senhas fortes e MFA são pilares da sua segurança digital. Ao adotá-los, você protegerá  suas informações mais valiosas de forma significativa.  
        </p>

        {/* Espaço para imagem */}
        <div className="my-8 h-4"></div>
      </div>
    </div>
  )
}
