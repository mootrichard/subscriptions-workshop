
export default function CardInfo ({ cards }) {
  return (
    <>
      <div className="whitespace-nowrap">
        <div>
          <span className="text-sm text-gray-900">Last 4 –</span>
          <span className="text-sm text-gray-600">&nbsp;Exp</span>
        </div>
        {cards.map(card => (
          <div className="p-1" key={card.id}>
                <div className="text-sm text-gray-900">{`${card.last4} – ${card.expMonth}/${card.expYear}`}</div>
          </div>
        ))}
      </div>
    </>
  )
}
