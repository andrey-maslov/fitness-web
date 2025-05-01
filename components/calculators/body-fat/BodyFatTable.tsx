export const BodyFatTable = () => {
  const bodyFatStandards = [
    {
      gender: 'Мужчины',
      values: [
        {
          age: '20–29',
          low: '<8%',
          normal: '8–19%',
          high: '20–24%',
          obese: '>24%',
        },
        {
          age: '30–39',
          low: '<11%',
          normal: '11–21%',
          high: '22–27%',
          obese: '>27%',
        },
        {
          age: '40–49',
          low: '<13%',
          normal: '13–24%',
          high: '25–29%',
          obese: '>29%',
        },
        {
          age: '50+',
          low: '<15%',
          normal: '15–26%',
          high: '27–31%',
          obese: '>31%',
        },
      ],
    },
    {
      gender: 'Женщины',
      values: [
        {
          age: '20–29',
          low: '<17%',
          normal: '17–28%',
          high: '29–35%',
          obese: '>35%',
        },
        {
          age: '30–39',
          low: '<18%',
          normal: '18–29%',
          high: '30–36%',
          obese: '>36%',
        },
        {
          age: '40–49',
          low: '<19%',
          normal: '19–30%',
          high: '31–37%',
          obese: '>37%',
        },
        {
          age: '50+',
          low: '<20%',
          normal: '20–31%',
          high: '32–38%',
          obese: '>38%',
        },
      ],
    },
  ]

  return (
    <>
      <h3>Нормы процента жира по полу и возрасту</h3>
      <table className='table-auto w-full text-sm'>
        <thead>
          <tr>
            <th className='border px-2 py-1'>Пол</th>
            <th className='border px-2 py-1'>Возраст</th>
            <th className='border px-2 py-1'>Низкий</th>
            <th className='border px-2 py-1'>Норма</th>
            <th className='border px-2 py-1'>Выше нормы</th>
            <th className='border px-2 py-1'>Ожирение</th>
          </tr>
        </thead>
        <tbody>
          {bodyFatStandards.map((group) =>
            group.values.map((row, idx) => (
              <tr key={`${group.gender}-${row.age}`}>
                {idx === 0 && (
                  <td
                    className='border px-2 py-1'
                    rowSpan={group.values.length}
                  >
                    {group.gender}
                  </td>
                )}
                <td className='border px-2 py-1'>{row.age}</td>
                <td className='border px-2 py-1'>{row.low}</td>
                <td className='border px-2 py-1'>{row.normal}</td>
                <td className='border px-2 py-1'>{row.high}</td>
                <td className='border px-2 py-1'>{row.obese}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  )
}
