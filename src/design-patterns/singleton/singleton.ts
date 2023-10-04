/**
 * Класс Singleton предоставляет способ создания единственного экземпляра класса.
 * Клиентский код может получить доступ к этому экземпляру с помощью метода `getInstance()`.
 */
export default class Singleton {
    /**
     * Приватное статическое поле для хранения единственного экземпляра Singleton.
     * @type {Singleton | null}
     * @private
     */
    private static instance: Singleton | null = null;

    /**
     * Приватный конструктор, чтобы предотвратить создание экземпляров Singleton извне.
     * @private
     */
    private constructor() {}

    /**
     * Статический метод для получения или создания экземпляра Singleton.
     * @returns {Singleton} Единственный экземпляр класса Singleton.
     */
    public static getInstance(): Singleton {
        /** Если экземпляр еще не создан, создаем его */
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        /** Возвращаем существующий или новый экземпляр Singleton */
        return Singleton.instance;
    }
}
