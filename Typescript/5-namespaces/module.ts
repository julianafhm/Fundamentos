/*
  Resumidamente os módulos em JavaScript ou Typescript é uma forma de você 
  compartilhar informações entre arquivos, dessa forma, todos os arquivos 
  que realizarem a importação desse módulo poderão utilizar e usufruir 
  de suas funções ou informações que foram expostas.

  import = Importa informações de um class, namespace, const, let, etc.
  export = Exporta para outras pessoas consumirem informações
*/

import { Pessoa } from "./namespaces-aninhados";
import { Pessoa1 } from "./pessoa1";

export {Pessoa1, Pessoa};