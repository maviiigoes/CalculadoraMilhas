
interface CalculadoraProps {
  valorMilhiero: number;
  valorDesconto: number;
  bonus: number;
  qtdComprada: number;
}

export function Calculadora({
  valorMilhiero,
  valorDesconto,
  bonus,
  qtdComprada,
}: CalculadoraProps) {
  const calcularTotalMilheiro = () => {
    const qtdMilheiro = qtdComprada+(qtdComprada * (bonus/100));
    const valorPagamento = valorMilhiero-(valorMilhiero * (valorDesconto/100));
    const totalMilheiro = valorPagamento* qtdComprada / qtdMilheiro;
    return totalMilheiro;
  };

  return (
    <>
      <p>Cada Milheiro sairia: {calcularTotalMilheiro()}</p>
    </>
  );
}
