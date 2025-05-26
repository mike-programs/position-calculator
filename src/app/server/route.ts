import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const risk = parseFloat(body.risk);
  const takeProfit = parseFloat(body.takeProfit);
  const stopLoss = parseFloat(body.stopLoss);
  const orderPrice = parseFloat(body.orderPrice);
  const positionType = body.positionType;

  if (isNaN(risk) || isNaN(takeProfit) || isNaN(stopLoss) || isNaN(orderPrice)) {
    return NextResponse.json({ error: "Invalid input values" }, { status: 400 });
  }

  let stopLossPercentage = 0;

  if (positionType === "long") {
    stopLossPercentage = ((orderPrice - stopLoss) / orderPrice) * 100;
  } else if (positionType === "short") {
    stopLossPercentage = ((stopLoss - orderPrice) / stopLoss) * 100;
  }

  const orderValue = risk / (stopLossPercentage / 100);

  return NextResponse.json({
    orderValue: Number(orderValue.toFixed(2)),
    orderPrice: Number(orderPrice.toFixed(2)),
    risk,
    stopLoss,
    takeProfit
  });
}
