function Info() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#e2e2e2',
        minHeight: '90vh',
        padding: '50px 20px',
      }}
    >
      <h3>Важлива інформація про Масонство:</h3>
      <div style={{ margin: '30px' }}>
        <a
          href="http://www.freemason.org.ua/uk-UA/Zasady-masonstva/Landmarky.aspx?ID=2"
          style={{ display: 'block' }}
        >
          Основні принципи Масонства - Ландмарки
        </a>
        <a
          href="http://www.freemason.org.ua/uk-UA/Zasady-masonstva/Dvanadcyat-osnovnyh-zapovidej-masonstva.aspx?ID=1"
          style={{ display: 'block' }}
        >
          12 заповідей Масонства
        </a>
        <a
          href="http://www.freemason.org.ua/uk-UA/Zasady-masonstva/Konstytucii-Andersona.aspx?ID=3"
          style={{ display: 'block' }}
        >
          Конституція Андерсона
        </a>
        {/* <a href="https://www.stone.co.ua/index.php" style={{ display: 'block' }}>
          Офіційний форум ВЛУ
        </a> */}
        <a href="https://www.stone.co.ua/index.php?topic=36.0" style={{ display: 'block' }}>
          Література (скарбниця)
        </a>
      </div>
    </div>
  );
}

export default Info;
